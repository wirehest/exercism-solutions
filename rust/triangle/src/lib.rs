use std::clone::Clone;
use std::cmp::{PartialEq, PartialOrd};
use std::default::Default;
use std::marker::Copy;
use std::ops::Add;

pub struct Triangle<T>(T, T, T);

impl<T> Triangle<T>
where
    T: Add<Output = T> + Copy + Clone + Default + PartialEq + PartialOrd,
{
    pub fn build(sides: [T; 3]) -> Option<Triangle<T>> {
        if sides.iter().all(|side| *side > Default::default())
            && sides[0] + sides[1] >= sides[2]
            && sides[0] + sides[2] >= sides[1]
            && sides[1] + sides[2] >= sides[0]
        {
            Some(Triangle(sides[0], sides[1], sides[2]))
        } else {
            None
        }
    }

    pub fn is_equilateral(&self) -> bool {
        self.0 == self.1 && self.1 == self.2 && self.2 == self.0
    }

    pub fn is_scalene(&self) -> bool {
        self.0 != self.1 && self.1 != self.2 && self.2 != self.0
    }

    pub fn is_isosceles(&self) -> bool {
        self.0 == self.1 || self.1 == self.2 || self.2 == self.0
    }
}
