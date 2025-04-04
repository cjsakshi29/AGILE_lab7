"""
Unit Tests for Calculator Functions
"""
import unittest
from calculator import add, subtract, multiply, divide  # ✅ Correct import

class TestCalculator(unittest.TestCase):
    """Test cases for calculator functions."""

    def test_add(self):
        """Test addition."""
        self.assertEqual(add(2, 3), 5)

    def test_subtract(self):
        """Test subtraction."""
        self.assertEqual(subtract(5, 2), 3)

    def test_multiply(self):
        """Test multiplication."""
        self.assertEqual(multiply(3, 4), 12)

    def test_divide(self):
        """Test division."""
        self.assertEqual(divide(10, 2), 5)
        self.assertEqual(divide(5, 0), "Error! Division by zero.")  # Division by zero check

if __name__ == "__main__":
    unittest.main()
