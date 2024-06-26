import PropTypes from 'prop-types';

UtilCard.propTypes={
    icon:PropTypes.element,
    heading:PropTypes.string,
    desc:PropTypes.string
}

export default function UtilCard({icon,heading,desc}) {
  return (
    <div className="border rounded-lg px-4 py-4 border-secondary text-black font-Poppins flex flex-col gap-2 w-full">
        <section className='flex flex-col text-2xl gap-2 text-secondary'>
            {icon}
            <h1 className='text-black'>{heading}</h1>
        </section>
        <article className='text-sm text-gray-500'>
                {desc}
        </article>
    </div>
  )
}
