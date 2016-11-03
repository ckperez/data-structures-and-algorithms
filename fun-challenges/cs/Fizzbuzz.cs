using System;

  class FizzBuzz
  {
        static void Main()
        {
            for (int i = 1; i < 101; i++)
            {

            bool FIZZ = i % 3 == 0;
            bool BUZZ = i % 5 == 0;
            bool FIZZBUZZ = i % 15 == 0;
            string fizz = "Fizz";
            string buzz = "Buzz";
            string fizzbuzz = "FizzBuzz";

                if (FIZZBUZZ)
                {
                    Console.WriteLine(fizzbuzz);
                }
                else if(BUZZ)
                {
                    Console.WriteLine(buzz);
                }
                else if(FIZZ)
                {
                    Console.WriteLine(fizz);
                }
                else
                {
                    Console.WriteLine(i);
                }
            }
        }
    }

