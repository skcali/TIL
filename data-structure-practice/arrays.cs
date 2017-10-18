using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
class Solution {

    static void Main(String[] args) {
        int n = Convert.ToInt32(Console.ReadLine());
        string[] arr_temp = Console.ReadLine().Split(' ');
        int[] arr = Array.ConvertAll(arr_temp,Int32.Parse);
        int[] reverseArr = new int[n];
        int max = n;
        for (int i = 0; i < n; i++) 
        {  
            reverseArr[i] = arr[max-1];
            max--;
        }
        reverseArr.ToString();
        string printArr = string.Join(" ", reverseArr);
        
        Console.WriteLine(printArr);
    }
}