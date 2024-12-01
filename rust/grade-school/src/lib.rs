use std::collections::HashMap;

pub struct School {
    rosters: HashMap<u32, Vec<String>>,
}

impl School {
    pub fn new() -> School {
        School {
            rosters: HashMap::new(),
        }
    }

    pub fn add(&mut self, grade: u32, student: &str) {
        if !self
            .rosters
            .values()
            .flatten()
            .collect::<Vec<_>>()
            .contains(&&student.to_string())
        {
            self.rosters
                .entry(grade)
                .and_modify(|e| {
                    e.push(student.to_string());
                    e.sort();
                })
                .or_insert(vec![student.to_string()]);
        };
    }

    pub fn grades(&self) -> Vec<u32> {
        let mut grades: Vec<u32> = self.rosters.keys().copied().collect();
        grades.sort();
        grades
    }

    pub fn grade(&self, grade: u32) -> Vec<String> {
        match self.rosters.get(&grade) {
            Some(roster) => roster.clone(),
            None => Vec::new(),
        }
    }
}
