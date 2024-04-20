/* eslint-disable tailwindcss/no-custom-classname */
import { IconSkull } from '@tabler/icons-react';

interface StarRatingProps {
    rating: number;
}

export default function StarRating(props: StarRatingProps) {
    return (
        <div>
            <div className="flex gap-1">
                {[...Array(5)].map((_, index) => {
                    if (index < props.rating) {
                        return <IconSkull stroke={2} key={index} size={24} className=' text-c2 size-5 sm:size-full'/>
                    }
                    return <IconSkull stroke={2} key={index} size={24} className='text-c0/40 size-5 sm:size-full' />
                })}
            </div>
        </div>
    )
}