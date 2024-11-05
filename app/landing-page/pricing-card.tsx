import { PricingPlan } from './pricing-section';
import { Check } from 'lucide-react';

const PricingCard = ({ title, price, description, features }: PricingPlan) => {
  return (
    <div>
      <div>
        <div className="inline-flex items-end">
          <h1 className="font-extrabold text-3xl">${price}</h1>
        </div>

        <h2 className="font-bold text-xl my-2">{title}</h2>
        <p>{description}</p>
        <div className="flex-grow border-t border-gray-400 opacity-25 my-3"></div>
        <ul>
          {
            features.map((feature, index) => (
              <li key={index} className="flex flex-row items-center text-gray-700 gap-2 my-2">
                <div className="rounded-full flex items-center justify-center bg-gray-900 w-4 h-4 mr-2">
                  <Check className="text-white" width={10} height={10} />
                </div>
                <p>{feature}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default PricingCard;
