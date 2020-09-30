from time import perf_counter
from types import FunctionType
from functools import wraps, reduce


def function_timer(a_function: FunctionType) -> FunctionType:

    @wraps(a_function)
    def inner(*args, **kwargs):
        start_time = perf_counter()
        result = a_function(*args, **kwargs)
        end_time = perf_counter()
        elapsed_time = end_time - start_time
        arguments = [str(arg) for arg in args]
        kw_arguments = [f"{k}={v}" for k, v in kwargs.items()]
        arguments.extend(kw_arguments)
        # Joining the argument list as a string
        arguments = ", ".join(arguments)
        print(f"{a_function.__name__}({arguments}) took {elapsed_time:.6f} to run.")
        return result

    return inner



# Fibonacci with a loop
@function_timer
def fib_loop(n: int) -> int:
    n = abs(n)
    previous_value = 0
    new_value = 1
    while n > 1:
        # Swapping values, new value = previous_value + new_value
        previous_value, new_value = new_value, previous_value + new_value
        n -= 1
    return new_value


# Fibonacci with recursion
@function_timer
def fib_recursion(n: int) -> int:
    def fib(n: int):
        if n < 3:
            return 1
        else:
            return fib(n - 1) + fib(n-2)
    return fib(n)


# Fibonacci with reduce
@function_timer
def fib_reduce(n: int) -> int:
    initial_tuple = (0, 1)
    result = reduce(lambda accumulation, counter: (accumulation[1], accumulation[0] + accumulation[1]), 
        range(n), initial_tuple)
    return result[0]


print(fib_loop(8))
print(fib_recursion(8))
print(fib_reduce(8))
