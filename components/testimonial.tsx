interface TestimonialProps {
  quote: string
  author: string
  organization: string
}

export default function Testimonial({ quote, author, organization }: TestimonialProps) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-gray-800 bg-black p-6">
      <div className="absolute top-6 right-6 text-4xl text-white/10">"</div>
      <div className="relative z-10">
        <blockquote className="mb-6 text-lg font-medium leading-relaxed">"{quote}"</blockquote>
        <div>
          <p className="font-medium">{author}</p>
          <p className="text-sm text-gray-400">{organization}</p>
        </div>
      </div>
    </div>
  )
}
