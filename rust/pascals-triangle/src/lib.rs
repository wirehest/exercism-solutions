pub struct PascalsTriangle {
    pascals: Vec<Vec<u32>>,
}

impl PascalsTriangle {
    pub fn new(row_count: u32) -> Self {
        if row_count == 0 {
            return Self { pascals: vec![] };
        }

        let mut pascals = vec![vec![1]];

        while pascals.len() as u32 != row_count {
            let last_row = pascals.last().unwrap();
            let mut new_row: Vec<_> = vec![];

            for index in 0..(last_row.len() + 1) {
                let a = match last_row.get(index) {
                    Some(value) => *value,
                    None => 0,
                };
                let b = if let Some(i) = index.checked_sub(1) {
                    match last_row.get(i) {
                        Some(value) => *value,
                        None => 0,
                    }
                } else {
                    0
                };

                new_row.push(a + b);
            }

            pascals.push(new_row);
        }

        Self { pascals }
    }

    pub fn rows(&self) -> Vec<Vec<u32>> {
        self.pascals.to_vec()
    }
}
