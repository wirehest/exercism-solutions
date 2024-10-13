def square_of_sum(n):
    total_a = 0
    for x in list(range(1, n + 1)):
        total_a += x

    total_a = total_a ** 2

    return total_a

def sum_of_squares(n):
    total_b = 0
    for x in list(range(1, n + 1)):
        total_b += x ** 2

    return total_b

def difference_of_squares(n):
    delta = square_of_sum(n) - sum_of_squares(n)

    return delta
