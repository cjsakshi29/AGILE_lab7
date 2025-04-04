"""
Calculator Module

This module provides basic arithmetic operations: addition, subtraction,
multiplication, and division.
"""

def add(a, b):
    """Returns the sum of two numbers."""
    return a + b

def subtract(a, b):
    """Returns the difference of two numbers."""
    return a - b

def multiply(a, b):
    """Returns the product of two numbers."""
    return a * b

def divide(a, b):
    """Returns the division of two numbers. Raises ZeroDivisionError if b is zero."""
    if b == 0:
        raise ZeroDivisionError("Cannot divide by zero")
    return a / b

def main():
    """Runs the calculator program with user input."""
    print("Simple Calculator")
    a = float(input("Enter first number: "))
    b = float(input("Enter second number: "))

    print(f"Addition: {add(a, b)}")
    print(f"Subtraction: {subtract(a, b)}")
    print(f"Multiplication: {multiply(a, b)}")
    print(f"Division: {divide(a, b)}")

if __name__ == "__main__":
    main()
