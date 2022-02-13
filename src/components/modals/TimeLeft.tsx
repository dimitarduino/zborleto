import { formatTime, Time } from '../../lib/words'

type Props = {
    timeLeft: Time
}

export const TimeLeft = ({ timeLeft }: Props) => {
    // const { hours, minutes, seconds } = timeLeft
    return (
        <div className="my-2 text-center">
            <h4>За следно ЗБОРЛЕ</h4>
            <p className="text-3xl">
                рефреширај
            </p>
        </div>
    )
}
