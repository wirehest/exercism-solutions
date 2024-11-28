use std::cmp::Ordering;
use std::collections::HashMap;
use std::fmt;

#[derive(Debug)]
pub struct TeamData {
    pub name: String,
    pub matches: u32,
    pub wins: u32,
    pub draws: u32,
    pub losses: u32,
    pub points: u32,
}

impl TeamData {
    const WIN_POINTS: u32 = 3;
    const DRAW_POINTS: u32 = 1;

    pub fn new(name: &str) -> Self {
        TeamData {
            name: String::from(name),
            matches: 0,
            wins: 0,
            draws: 0,
            losses: 0,
            points: 0,
        }
    }

    pub fn add_win(&mut self) {
        self.matches += 1;
        self.wins += 1;
        self.points += TeamData::WIN_POINTS;
    }

    pub fn add_draw(&mut self) {
        self.matches += 1;
        self.draws += 1;
        self.points += TeamData::DRAW_POINTS;
    }

    pub fn add_loss(&mut self) {
        self.matches += 1;
        self.losses += 1;
    }
}

impl fmt::Display for TeamData {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(
            f,
            "{:31}|{:>3} |{:>3} |{:>3} |{:>3} |{:>3}",
            self.name, self.matches, self.wins, self.draws, self.losses, self.points
        )
    }
}

pub fn tally(match_results: &str) -> String {
    const HEADER: &str = "Team                           | MP |  W |  D |  L |  P";

    let results_iter = match_results.lines();
    let mut results_map: HashMap<&str, TeamData> = HashMap::new();

    for result in results_iter {
        if let [team1, team2, outcome] = &result.split(';').collect::<Vec<_>>()[..] {
            results_map.entry(team1).or_insert(TeamData::new(team1));
            results_map.entry(team2).or_insert(TeamData::new(team2));

            match *outcome {
                "win" => {
                    results_map.entry(team1).and_modify(|data| data.add_win());
                    results_map.entry(team2).and_modify(|data| data.add_loss());
                }
                "loss" => {
                    results_map.entry(team1).and_modify(|data| data.add_loss());
                    results_map.entry(team2).and_modify(|data| data.add_win());
                }
                _ => {
                    results_map.entry(team1).and_modify(|data| data.add_draw());
                    results_map.entry(team2).and_modify(|data| data.add_draw());
                }
            }
        }
    }

    let mut teams_sorted: Vec<_> = results_map.values().collect();
    teams_sorted.sort_by(|team1, team2| match team2.points.cmp(&team1.points) {
        Ordering::Equal => team1.name.cmp(&team2.name),
        greater_or_less => greater_or_less,
    });

    let mut tabulated = vec![HEADER.to_string()];
    tabulated.append(
        &mut teams_sorted
            .iter()
            .map(|result| result.to_string())
            .collect::<Vec<_>>(),
    );

    tabulated.join("\n")
}
