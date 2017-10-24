using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
class Solution {

    static int factorial(int n) {
        // Complete this function
        if(n >= 2)
        {
            return (n * factorial(n-1));
        }
        else
        {
            return 1;
        }
    }

    static void Main(String[] args) {
        int n = Convert.ToInt32(Console.ReadLine());
        int result = factorial(n);
        Console.WriteLine(result);
    }
}
