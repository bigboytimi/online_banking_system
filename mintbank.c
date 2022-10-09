#include <stdio.h>
#include <string.h>
#include <stdlib.h>


/* This structure stores the content of the user data */
struct user
{
	char phone[50];
	char ac[50];
	char password[50];
	float balance;
	char count = 'y';
};


int main()
{
	/* Displays welcome Message */
	puts("Welcome to Mint Bank of Africa");
	puts("Version 0.0.1");
	puts("Press Ctrl+c To Exit");

	/* @usr: stores data on the current user. 
	 * @fp: is a pointer to the file where the user data is stored
	 * @opt: means user options/choice
	 * @filename: name of the file where user data is stored.
	 *            user phone number will be used as filename so that it 
	 *            can be easily accessible to user always.
	 */
	struct user usr;
	FILE *fp;
	char filename[50], phone[50], pword[50];
	int opt, choice;


	/* request for user needs */
	printf("\nHow can we help you today?");
	printf("\n\n1. Register an account");
	printf("\n2. Login to account");

	printf("\n\nChoose option:\t");
	scanf("%d", &opt);

	if(opt == 1)
	{
		/* request for user input and store them appropriately */
		system("clear");
		printf("Enter your account number:\t");
		scanf("%s", usr.ac);
		printf("\nEnter your phone number:\t");
		scanf("%s", usr.phone);
		printf("\nCreate a password:\t");
		scanf("%s", usr.password);
		usr.balance = 0;

		/* make a file to store user data
		 * @strnpy: copies the last four digits of the user phone number and stores it into filename.
		 * @strcat: concatenates the last 4 digits in filename to an extension '.data' to show that it contains user data.
		 * @fopen: creates the file with and stores it into the pointer fp
		 * @fwrites: writes the content of the user data saved inside usr to the fp pointer i.e the file created.
		 */
		strcpy(filename, usr.phone);
		fp = fopen(strcat(filename, ".data"), "w");
		fwrite(&usr, sizeof(struct user),1, fp);

		/* Confirm if the file contains the appropriate data */
		if(fwrite != 0)
		{
			printf("\n\nAccount successfully registered\n");
		}
		else
	       	{
			printf("\n\nSomething went wrong please try again\n");
		}
		fclose(fp);


	}
	/*If user enters option 2. Login to existing account*/

	if(opt == 2)
	{
		system("clear");
		printf("\nEnter phone number:\t");
		scanf("%s", phone);
		printf("Enter password:\t");
		scanf("%s", pword);
		strcpy(filename, phone);
		fp = fopen(strcat(filename, "data"), "r");
		if(fp == NULL)
		{
			printf("\nAccount number not registered");
		}
		else 
		{
			fread(&usr, sizeof(struct user),1, fp);
			fclose(fp);
			if(!strcmp(pword, usr.password))
			{
				puts("LOGIN SUCCESSFUL!");

				while(cont == 'y')
				{
					system("clear");
					puts("Press 1 to check balance");
					puts("Press 2 to deposit an amount");
					puts("Press 3 for cash withdraw");
					puts("Press 4 to online transfer");
					puts("Press 5 to change password");
					printf("\n\n Your choice:\t");
					scanf("%d", &choice);

					switch(choice)
					{
						case 1:
							print



					printf(\n"Do you want to continue the transaction [y for YES/n for NO]\t");
					scanf("%s", &cont);


			}
			else
			{
				printf("\nIncorrect password!");
			}
		}



	}


 

	return (0);
}
 
