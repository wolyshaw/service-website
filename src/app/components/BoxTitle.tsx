
export default function BoxTitle({title, content, className}: {title: string, content: string, className?: string}) {
  return <div className={`${className} max-w-lg text-center mx-auto`}>
    <h3 className="text-4xl mb-3">{title}</h3>
    <p className="text-xl font-light">{content}</p>
  </div>
}
