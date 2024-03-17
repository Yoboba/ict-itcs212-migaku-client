import { IconStarFilled } from '@tabler/icons-react';

interface StarRatingProps {
    rating: number;
}

export default function StarRating(props: StarRatingProps) {
    return (
        <div>
            <div className="flex gap-1">
                {[...Array(5)].map((_, index) => {
                    if (index < props.rating) {
                        return <IconStarFilled key={index} size={24} className=' text-c7'/>
                    }
                    return <IconStarFilled key={index} size={24} className='text-c0/40' />
                })}
            </div>
        </div>
    )
}