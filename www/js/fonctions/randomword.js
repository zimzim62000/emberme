function randomWord()
{
	var lenght = Math.floor((Math.random()*10)+1); 
	var j;
	var word = '';
	
	for(j=0;j<lenght;j++)
	{
		letter = Math.random().toString(36).substr(2,1);
		word += letter;
	}
	return word;
}