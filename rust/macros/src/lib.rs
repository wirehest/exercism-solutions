#[macro_export]
macro_rules! hashmap {
    (,) => {
        compile_error!("");
    };
    ($($key:expr => $value:expr),*) => {
        {
            let mut hm = ::std::collections::HashMap::new();
            $(hm.insert($key, $value);)*
            hm
        }
    };
}
