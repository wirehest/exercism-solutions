pub fn map<F, T, U>(input: Vec<T>, mut function: F) -> Vec<U>
where
    F: FnMut(T) -> U,
{
    let mut transformed: Vec<_> = Vec::new();

    for element in input {
        transformed.push(function(element));
    }

    transformed
}
