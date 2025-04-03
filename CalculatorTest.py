import unittest
from Calculator import Calculator  # Importing the Calculator class

class CalculatorTest(unittest.TestCase):  # Creating a test class
    def setUp(self):
        """This method runs before every test case"""
        self.calc = Calculator()  # Creating an instance of Calculator

    def test_add(self):
        """Test the addition function"""
        self.assertEqual(10, self.calc.add(7, 3), "Addition is incorrect")

    def test_subtract(self):
        """Test the subtraction function"""
        self.assertEqual(4, self.calc.subtract(7, 3), "Subtraction is incorrect")

    def test_multiply(self):
        """Test the multiplication function"""
        self.assertEqual(21, self.calc.multiply(7, 3), "Multiplication is incorrect")

    def test_squareRoot(self):
        """Test the square root function"""
        self.assertEqual(5, self.calc.squareRoot(25), "Square root is incorrect")

if __name__ == '__main__':
    unittest.main()
