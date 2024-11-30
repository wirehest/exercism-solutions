struct Position {
    x: usize,
    y: usize,
}

pub fn annotate(minefield: &[&str]) -> Vec<String> {
    let minefield = minefield
        .iter()
        .map(|row| row.chars().collect::<Vec<_>>())
        .collect::<Vec<_>>();
    let height = if minefield.is_empty() {
        return vec![];
    } else {
        minefield.len()
    };
    let width = minefield[0].len();
    let mut annotated: Vec<String> = Vec::new();

    for (row_num, row) in minefield.iter().enumerate() {
        let mut row_with_counts: Vec<char> = Vec::new();
        for (col_num, square) in row.iter().enumerate() {
            let position = Position {
                x: col_num,
                y: row_num,
            };

            match square {
                '*' => row_with_counts.push('*'),
                _ => {
                    let adjacents = get_adjacents(position, width, height);
                    let mut mine_count = 0u32;

                    for (adj_x, adj_y) in adjacents {
                        let square = minefield[adj_y][adj_x];
                        if square == '*' {
                            mine_count += 1
                        }
                    }
                    row_with_counts.push(match std::char::from_digit(mine_count, 10) {
                        Some('0') => ' ',
                        Some(everything_else) => everything_else,
                        _ => ' ',
                    });
                }
            }
        }
        annotated.push(row_with_counts.iter().collect::<String>())
    }

    annotated
}

fn get_adjacents(position: Position, width: usize, height: usize) -> Vec<(usize, usize)> {
    let mut adjacents: Vec<_> = Vec::new();
    let shifts: [(i8, i8); 8] = [
        (-1, 0),
        (-1, 1),
        (0, 1),
        (1, 1),
        (1, 0),
        (-1, -1),
        (0, -1),
        (1, -1),
    ];

    shifts.iter().for_each(|(dx, dy)| {
        let new_x = position.x as i8 + *dx;
        let new_y = position.y as i8 + *dy;

        if new_x >= 0 && new_x < width as i8 && new_y >= 0 && new_y < height as i8 {
            adjacents.push((new_x as usize, new_y as usize));
        };
    });

    adjacents
}
