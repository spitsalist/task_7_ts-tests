export const generateFibonacci =(limit: number): number[] => {
    const sequence:number[] = [0,1]
    while(sequence[sequence.length -1] + sequence[sequence.length -2]<= limit){
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length -2])
    }
    return sequence
}

  const isPrime = (num:number):boolean => {
    if(num <= 1) return false
    for(let i =2; i<= Math.sqrt(num); i++){
        if(num % i === 0) return false
    }
    return true
}

export const generatePrimeNumbers =(limit: number): number[] =>{
    const primes: number[] = []
    for(let i =2; i<= limit; i++){
        if(isPrime(i)){
            primes.push(i)
        }
    }
    return primes
}