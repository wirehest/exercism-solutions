use std::default;
use std::mem;

#[derive(Default)]
pub struct SimpleLinkedList<T> {
    head: List<T>,
    length: usize,
}

enum List<T> {
    Empty,
    More(Box<Node<T>>),
}

struct Node<T> {
    value: T,
    next: List<T>,
}

impl<T: Default + Clone> SimpleLinkedList<T> {
    pub fn new() -> Self {
        Default::default()
    }

    // You may be wondering why it's necessary to have is_empty()
    // when it can easily be determined from len().
    // It's good custom to have both because len() can be expensive for some types,
    // whereas is_empty() is almost always cheap.
    // (Also ask yourself whether len() is expensive for SimpleLinkedList)
    pub fn is_empty(&self) -> bool {
        self.length == 0
    }

    pub fn len(&self) -> usize {
        self.length
    }

    pub fn push(&mut self, element: T) {
        let new_node = Box::new(Node {
            value: element,
            next: mem::take(&mut self.head),
        });
        self.head = List::More(new_node);
        self.length += 1;
    }

    pub fn pop(&mut self) -> Option<T> {
        match mem::take(&mut self.head) {
            List::More(node) => {
                self.head = node.next;
                self.length -= 1;
                Some(node.value)
            }
            List::Empty => None,
        }
    }

    pub fn peek(&self) -> Option<&T> {
        match self.head {
            List::More(ref node) => Some(&node.value),
            List::Empty => None,
        }
    }

    #[must_use]
    pub fn rev(self) -> Self {
        let mut reversed = SimpleLinkedList::new();
        let mut next_node = &self.head;

        while let List::More(node) = next_node {
            reversed.push(node.value.clone());
            next_node = &node.next;
        }

        reversed
    }
}

impl<T> default::Default for List<T> {
    fn default() -> Self {
        Self::Empty
    }
}

impl<T: Default + Clone> FromIterator<T> for SimpleLinkedList<T> {
    fn from_iter<I: IntoIterator<Item = T>>(iter: I) -> Self {
        let mut linked_list: SimpleLinkedList<T> = SimpleLinkedList::new();

        iter.into_iter()
            .for_each(|element| linked_list.push(element));

        linked_list
    }
}

// In general, it would be preferable to implement IntoIterator for SimpleLinkedList<T>
// instead of implementing an explicit conversion to a vector. This is because, together,
// FromIterator and IntoIterator enable conversion between arbitrary collections.
//
// The reason this exercise's API includes an explicit conversion to Vec<T> instead
// of IntoIterator is that implementing that interface is fairly complicated, and
// demands more of the student than we expect at this point in the track.
//
// Please note that the "front" of the linked list should correspond to the "back"
// of the vector as far as the tests are concerned.

impl<T> From<SimpleLinkedList<T>> for Vec<T> {
    fn from(linked_list: SimpleLinkedList<T>) -> Vec<T> {
        let mut new_vec: Vec<T> = Vec::new();
        let mut next_node = linked_list.head;

        while let List::More(node) = next_node {
            new_vec.push(node.value);
            next_node = node.next;
        }

        new_vec.reverse();
        new_vec
    }
}
