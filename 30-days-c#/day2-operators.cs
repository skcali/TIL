using System;
using System.Collections.Generic;
using System.IO;
class Solution {
    static void Main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution */
        double mealCost = Convert.ToDouble(Console.ReadLine());
        double tipPercent = Convert.ToDouble(Console.ReadLine());
        double taxPercent = Convert.ToDouble(Console.ReadLine());
        // Do Math  
        double tip = mealCost * (tipPercent/100);
        double tax = mealCost * (taxPercent/100);
        double totalCost = Math.Round(mealCost + tip + tax);
        // Make string
        string finalCost = "The total meal cost is " + totalCost.ToString() + " dollars.";
        Console.WriteLine(finalCost);
    }
}