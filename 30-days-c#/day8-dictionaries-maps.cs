using System;
using System.Collections.Generic;
using System.IO;
class Solution {
    static void Main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution */
        int n = Convert.ToInt32(Console.ReadLine());
        Dictionary<string, string> phoneBook = new Dictionary<string, string>();
        for (int i = 0; i < n; i++)
        {
            string name = Console.ReadLine();
            string[] nameNum = name.Split(' ');
            phoneBook.Add(nameNum[0], nameNum[1]);
        }

        for (int k = 0; k < n; k++)
        {
            string searchName = Console.ReadLine();

                if(phoneBook.ContainsKey(searchName))
                {
                    string value = phoneBook[searchName];
                    Console.WriteLine(searchName + "=" + value);

                }
                else
                {
                    Console.WriteLine("Not found");

                }
            
        }

    }
}