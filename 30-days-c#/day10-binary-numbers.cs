using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
class Solution {

    static void Main(String[] args) {
        int n = Convert.ToInt32(Console.ReadLine());

        int rem = 0, s = 0, t = 0;

        while(n > 0)
        {
            rem = n % 2;
            n = n / 2;
            if(rem == 1)
            {     
                s++;
                if(s >= t)
                {
                    t = s;
                }
            }
            else
            {
                s = 0;
            }   
        }

        Console.WriteLine(t);
    }
}
