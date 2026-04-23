import { ReactNode } from 'react'

interface SummaryBoxProps {
  title?: string
  children: ReactNode
}

export default function SummaryBox({ title = 'خلاصه به زبان ساده', children }: SummaryBoxProps) {
  return (
    <div className="my-8 rounded-lg border-l-4 border-primary-500 bg-gray-50 p-6 shadow-sm dark:bg-gray-800/50">
      <div className="flex items-center gap-2 mb-3">
        {/* آیکون لامپ روشن برای ایده و بینش */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-primary-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.82 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.496 1.508 1.333 1.508 2.316v.192m5.14-2.056a42.14 42.14 0 00-5.14 0"
          />
        </svg>
        <h4 className="m-0 text-lg font-bold text-gray-900 dark:text-gray-100">{title}</h4>
      </div>
      <div className="text-gray-700 dark:text-gray-300 text-base leading-relaxed m-0">
        {children}
      </div>
    </div>
  )
}
