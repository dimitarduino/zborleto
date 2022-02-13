import { WORDS } from '../constants/wordlist'
import { VALID_GUESSES } from '../constants/valid-guesses'

// January 1, 2022 Game Epoch
const EPOCH_START = 1640991600000
const MS_IN_DAY = 86400000
let zborotNaDenotIndex = -1;

export const isWordInWordList = (word: string) => {
    return WORDS.includes(word.toLowerCase()) || VALID_GUESSES.includes(word.toLowerCase())
}

export const getWordOfDay = () => {
    return WORDS[getWordOfDayIndex()].toUpperCase()
}

export const isWinningWord = (word: string) => {
    console.log(getWordOfDay());
    return getWordOfDay() === word
}

export const getWordOfDayIndex = () => {
    
    if (zborotNaDenotIndex === -1) {        
        zborotNaDenotIndex = Math.round(Math.random() * WORDS.length);

        return zborotNaDenotIndex;
    } else {
        return zborotNaDenotIndex;
    }
}

export const getTimeUntilNextWord = () => {
    const solutionIndex = getWordOfDayIndex()
    const time = EPOCH_START + (solutionIndex + 1) * MS_IN_DAY - Date.now()
    const date = new Date(time)
    return {
        hours: (24 + (date.getHours() - 1)) % 24,
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        solutionIndex: solutionIndex,
    }
}
export type Time = {
    hours: number
    minutes: number
    seconds: number
}

export const formatTime = (time: number) => (time >= 10 ? `${time}` : `0${time}`)
