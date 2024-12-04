#[derive(PartialEq, Eq, Debug)]
pub enum Direction {
    North,
    East,
    South,
    West,
}

pub struct Position {
    x: i32,
    y: i32,
}

pub struct Robot {
    position: Position,
    direction: Direction,
}

impl Robot {
    pub fn new(x: i32, y: i32, d: Direction) -> Self {
        Self {
            position: Position { x, y },
            direction: d,
        }
    }

    #[must_use]
    pub fn turn_right(mut self) -> Self {
        self.direction = match self.direction {
            Direction::North => Direction::East,
            Direction::East => Direction::South,
            Direction::South => Direction::West,
            Direction::West => Direction::North,
        };
        self
    }

    #[must_use]
    pub fn turn_left(mut self) -> Self {
        self.direction = match self.direction {
            Direction::North => Direction::West,
            Direction::East => Direction::North,
            Direction::South => Direction::East,
            Direction::West => Direction::South,
        };
        self
    }

    #[must_use]
    pub fn advance(mut self) -> Self {
        match self.direction {
            Direction::North => self.position.y += 1,
            Direction::East => self.position.x += 1,
            Direction::South => self.position.y -= 1,
            Direction::West => self.position.x -= 1,
        };
        self
    }

    #[must_use]
    pub fn instructions(mut self, instructions: &str) -> Self {
        let instructs_iter = instructions.chars();

        instructs_iter.fold(self, |robot, instruct| match instruct {
            'R' => robot.turn_right(),
            'L' => robot.turn_left(),
            'A' => robot.advance(),
            _ => robot,
        })
    }

    pub fn position(&self) -> (i32, i32) {
        (self.position.x, self.position.y)
    }

    pub fn direction(&self) -> &Direction {
        &self.direction
    }
}
