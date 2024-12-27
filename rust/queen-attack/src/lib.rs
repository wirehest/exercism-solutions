#[derive(Debug, PartialEq, Eq)]
pub struct ChessPosition(i32, i32);

#[derive(Debug)]
pub struct Queen {
    position: ChessPosition,
}

impl ChessPosition {
    pub fn new(rank: i32, file: i32) -> Option<Self> {
        if !(0..=7).contains(&rank) || !(0..=7).contains(&file) {
            None
        } else {
            Some(Self(rank, file))
        }
    }
}

impl Queen {
    pub fn new(position: ChessPosition) -> Self {
        Self { position }
    }

    pub fn can_attack(&self, other: &Queen) -> bool {
        let valid_moves = self.get_valid_moves();
        valid_moves.contains(&other.position)
    }

    fn get_valid_moves(&self) -> Vec<ChessPosition> {
        const DIRECTIONS: [(i32, i32); 8] = [
            (0, 1),
            (1, 1),
            (1, 0),
            (1, -1),
            (0, -1),
            (-1, -1),
            (-1, 0),
            (-1, 1),
        ];

        let mut accessible = Vec::new();

        for direction in DIRECTIONS {
            let mut next_rank = self.position.0;
            let mut next_file = self.position.1;

            loop {
                next_rank += direction.0;
                next_file += direction.1;

                if let Some(position) = ChessPosition::new(next_rank, next_file) {
                    accessible.push(position);
                } else {
                    break;
                }
            }
        }

        accessible
    }
}
