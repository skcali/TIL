class Person {
    public int age;     
	public Person(int initialAge) {
        // Add some more code to run some checks on initialAge
        if (initialAge < 0) {
            initialAge = 0;
            Console.WriteLine("Age is not valid, setting age to 0.");
            age = initialAge;
        }
        else
        {
            age = initialAge;
        }
     }
     public void amIOld() {
        // Do some computations in here and print out the correct statement to the console 
        if (age >= 18) {
            Console.WriteLine("You are old.");
        }
        else if (age >= 13 && age < 18)
        {
            Console.WriteLine("You are a teenager.");
        }
        else
        {
            Console.WriteLine("You are young.");
        }
     }

     public void yearPasses() {
        // Increment the age of the person in here
        age++;
     }