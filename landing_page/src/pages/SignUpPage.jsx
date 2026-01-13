import { BanknotesIcon, PhoneIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline'
import WaitingList from '../components/WaitingList'
import useScrollToTop from '../hooks/useScrollToTop'

export default function SignUpPage() {
  useScrollToTop()
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-900">

      <WaitingList/>
      
      <div className="mx-auto max-w-2xl sm:text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl dark:text-white">
          Contact Sales
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-400">
          Our sales team is here to help you get started and answer any questions you may have about our platform and services. 
        </p>
      </div>

      <div className="mx-auto mt-20 max-w-lg space-y-16">

        <div className="flex gap-x-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600 dark:bg-indigo-500">
            <PhoneIcon aria-hidden="true" className="size-6 text-white" />
          </div>
          <div>
            <h3 className="text-base/7 font-semibold text-gray-900 dark:text-white">Sales support</h3>
            <p className="mt-2 text-base/7 text-gray-600 dark:text-gray-400">
              We will help you setting up your account.
            </p>
            <p className="mt-4 text-sm/6 font-semibold">
              <a href="#" className="text-indigo-600 dark:text-indigo-400">
                Sales Department<span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>

        <div className="flex gap-x-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600 dark:bg-indigo-500">
            <PresentationChartLineIcon aria-hidden="true" className="size-6 text-white" />
          </div>
          <div>
            <h3 className="text-base/7 font-semibold text-gray-900 dark:text-white">Technical support</h3>
            <p className="mt-2 text-base/7 text-gray-600 dark:text-gray-400">
              Schedule a product demo for you and your team.
            </p>
            <p className="mt-4 text-sm/6 font-semibold">
              <a href="#" className="text-indigo-600 dark:text-indigo-400">
                Sales Department<span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>

        <div className="flex gap-x-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600 dark:bg-indigo-500">
            <BanknotesIcon aria-hidden="true" className="size-6 text-white" />
          </div>
          <div>
            <h3 className="text-base/7 font-semibold text-gray-900 dark:text-white">Business Development</h3>
            <p className="mt-2 text-base/7 text-gray-600 dark:text-gray-400">
              Want to partner with us? 
            </p>
            <p className="mt-4 text-sm/6 font-semibold">
              <a href="#" className="text-indigo-600 dark:text-indigo-400">
                Business Development Manager<span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}
