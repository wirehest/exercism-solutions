use anyhow::Error;
use std::fs;

#[derive(Debug)]
pub struct Flags {
    prepend_line_number: bool,
    only_filenames_with_matches: bool,
    case_sensitive: bool,
    invert: bool,
    exact_match: bool,
}

impl Flags {
    pub fn new(flags: &[&str]) -> Self {
        Self {
            prepend_line_number: flags.contains(&"-n"),
            only_filenames_with_matches: flags.contains(&"-l"),
            case_sensitive: flags.contains(&"-i"),
            invert: flags.contains(&"-v"),
            exact_match: flags.contains(&"-x"),
        }
    }
}

pub fn grep(pattern: &str, flags: &Flags, files: &[&str]) -> Result<Vec<String>, Error> {
    let mut matches = Vec::new();

    for file in files {
        let content = fs::read_to_string(file)?;

        for (line_number, line) in content.lines().enumerate() {
            let mut matching = String::new();

            let mut match_found = match (flags.case_sensitive, flags.exact_match) {
                (false, false) => line.contains(pattern),
                (false, true) => line == pattern,
                (true, exact_match) => {
                    let lowercase_pattern = pattern.to_lowercase();
                    let lowercase_line = line.to_lowercase();
                    if exact_match {
                        lowercase_line == lowercase_pattern
                    } else {
                        lowercase_line.contains(&lowercase_pattern)
                    }
                }
            };

            if flags.invert {
                match_found = !match_found
            }

            if !match_found {
                continue;
            }

            if files.len() > 1 {
                matching = matching + file + ":";
            }

            if flags.prepend_line_number {
                matching = matching + &(line_number + 1).to_string() + ":";
            };

            if flags.only_filenames_with_matches {
                matching = file.to_string();
            } else {
                matching += line;
            }

            matches.push(matching)
        }
    }

    matches.dedup();
    Ok(matches)
}
