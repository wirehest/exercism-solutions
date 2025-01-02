#[derive(Debug, PartialEq, Eq)]
pub enum Error {
    SpanTooLong,
    InvalidDigit(char),
}

pub fn lsp(string_digits: &str, span: usize) -> Result<u64, Error> {
    if span > string_digits.len() {
        return Err(Error::SpanTooLong);
    }

    let digits: Vec<_> = string_digits
        .chars()
        .map(|c| {
            c.to_digit(10)
                .map(|d| d as u64)
                .ok_or(Error::InvalidDigit(c))
        })
        .collect::<Result<Vec<_>, _>>()?;

    digits
        .windows(span)
        .map(|window| window.iter().product::<u64>())
        .max()
        .ok_or(Error::SpanTooLong)
}
