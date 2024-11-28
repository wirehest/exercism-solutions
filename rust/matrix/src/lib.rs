pub struct Matrix(Vec<Vec<u32>>);

impl Matrix {
    pub fn new(input: &str) -> Self {
        let rows: Vec<Vec<_>> = input
            .lines()
            .map(|row| {
                row.split_whitespace()
                    .map(|cell| cell.parse::<u32>().unwrap())
                    .collect()
            })
            .collect();

        Matrix(rows)
    }

    pub fn row(&self, row_no: usize) -> Option<Vec<u32>> {
        self.0.get(row_no - 1).cloned()
    }

    pub fn column(&self, col_no: usize) -> Option<Vec<u32>> {
        let mut col: Vec<u32> = Vec::new();

        for row in &self.0 {
            // println!("{:?}", row);
            col.push(if let Some(value) = row.get(col_no - 1) {
                *value
            } else {
                return None;
            })
        }
        Some(col)
    }
}
