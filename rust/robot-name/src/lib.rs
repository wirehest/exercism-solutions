use rand::{thread_rng, Rng};
use std::sync::Mutex;

static USED_NAMES: Mutex<Vec<String>> = Mutex::new(Vec::new());

pub struct Robot {
    name: String,
}

impl Robot {
    pub fn new() -> Self {
        Robot {
            name: Self::make_name(),
        }
    }

    pub fn name(&self) -> &str {
        &self.name
    }

    pub fn reset_name(&mut self) {
        self.name = Robot::make_name();
    }

    fn make_name() -> String {
        let rand_alpha = || thread_rng().gen_range('A'..='Z') as char;
        let rand_num = || thread_rng().gen_range('0'..='9') as char;
        let mut name: String;

        loop {
            let letters: String = (0..2).map(|_| rand_alpha()).collect();
            let numbers: String = (0..3).map(|_| rand_num()).collect();
            name = format!("{}{}", letters, numbers);

            if USED_NAMES.lock().unwrap().contains(&name) {
                continue;
            } else {
                USED_NAMES.lock().unwrap().push(name.clone());
                return name;
            }
        }
    }
}
