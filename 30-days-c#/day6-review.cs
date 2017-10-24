using System;
using System.Collections.Generic;
using System.IO;
class Solution {
    static void Main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution */
        int n = Int32.Parse(Console.ReadLine());

        for (int i = 0; i < n; i++)
        {
            string TestWord = Console.ReadLine();
            char[] CharArr = TestWord.ToCharArray();
            List<char> EvenIndex = new List<char>();
            List<char> OddIndex = new List<char>();
            for (int k = 0; k < CharArr.Length; k++)
            {
                if(k % 2 == 0 || k == 2)
                {
                    EvenIndex.Add(CharArr[k]);
                } 
                else
                {
                    OddIndex.Add(CharArr[k]);
                }
            }
            Console.WriteLine(string.Join("", EvenIndex.ToArray()) + " " + string.Join("", OddIndex.ToArray()));
        }

    }
}