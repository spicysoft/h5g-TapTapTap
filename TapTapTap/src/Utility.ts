class Utility 
{
	static GetRandomInt(Min:number, Max:number):number 
	{
        return Math.floor( Min + Math.random() * (Max+0.999 - Min) );
    }

		static GetRandom(Min:number, Max:number):number 
	{
        return Min + Math.random() * (Max - Min);
    }
}