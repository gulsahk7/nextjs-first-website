import Link from "next/link";
import React from "react";

export default function ProdcutCart() {
  return (
    <div className="space-y-3">
      <p className="text-center text-orange-500 text-2xl font-medium ">
        World Class Products
      </p>
      <div className="max-w-7xl mx-auto">
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quia
          officiis exercitationem cumque velit maxime odit est corporis
          obcaecati voluptatem!
        </p>
      </div>
      <div>
        <div className="max-w-7xl mx-auto flex flex-row gap-4">
          <div className="">
            <img
              src="https://images.pexels.com/photos/29983842/pexels-photo-29983842.jpeg?_gl=1*1tpdz15*_ga*NTc2NTk4NTMuMTc2MTIyODc1NA..*_ga_8JE65Q40S6*czE3NjMwNTQ5MzckbzQkZzEkdDE3NjMwNTY0MzIkajQxJGwwJGgw"
              alt=""
              className="w-96 h-auto"
            />
            <p className="text-center text-orange-500">Caner</p>
            <p>
              Nori grape silver beet broccoli kombu beet greens fava bean potato
              quandong celery. Bunya nuts black-eyed pea prairie turnip leek
              lentil turnip greens parsnip.
            </p>
            <p className="text-center text-orange-600 mt-2">$10.45</p>
          </div>

          <div className="">
            <img
              src="https://images.pexels.com/photos/29983842/pexels-photo-29983842.jpeg?_gl=1*1tpdz15*_ga*NTc2NTk4NTMuMTc2MTIyODc1NA..*_ga_8JE65Q40S6*czE3NjMwNTQ5MzckbzQkZzEkdDE3NjMwNTY0MzIkajQxJGwwJGgw"
              alt=""
              className="w-96 h-auto"
            />
            <p className="text-center text-orange-500">Caner</p>
            <p>
              Nori grape silver beet broccoli kombu beet greens fava bean potato
              quandong celery. Bunya nuts black-eyed pea prairie turnip leek
              lentil turnip greens parsnip.
            </p>
            <p className="text-center text-orange-600 mt-2">$10.45</p>
          </div>
          <div className="">
            <img
              src="https://images.pexels.com/photos/29983842/pexels-photo-29983842.jpeg?_gl=1*1tpdz15*_ga*NTc2NTk4NTMuMTc2MTIyODc1NA..*_ga_8JE65Q40S6*czE3NjMwNTQ5MzckbzQkZzEkdDE3NjMwNTY0MzIkajQxJGwwJGgw"
              alt=""
              className="w-96 h-auto"
            />
            <p className="text-center text-orange-500">Caner</p>
            <p>
              Nori grape silver beet broccoli kombu beet greens fava bean potato
              quandong celery. Bunya nuts black-eyed pea prairie turnip leek
              lentil turnip greens parsnip.
            </p>
            <p className="text-center text-orange-600 mt-2">$10.45</p>
          </div>
          <div className="">
            <img
              src="https://images.pexels.com/photos/29983842/pexels-photo-29983842.jpeg?_gl=1*1tpdz15*_ga*NTc2NTk4NTMuMTc2MTIyODc1NA..*_ga_8JE65Q40S6*czE3NjMwNTQ5MzckbzQkZzEkdDE3NjMwNTY0MzIkajQxJGwwJGgw"
              alt=""
              className="w-96 h-auto"
            />
            <p className="text-center text-orange-500">Caner</p>
            <p>
              Nori grape silver beet broccoli kombu beet greens fava bean potato
              quandong celery. Bunya nuts black-eyed pea prairie turnip leek
              lentil turnip greens parsnip.
            </p>
            <p className="text-center text-orange-600 mt-2">$10.45</p>
            <div className="flex ">
              <input
                className="bg-gray-200 rounded-l-3xl px-4 py-2"
                type="number"
              />
              <Link
                className="bg-orange-500 text-nowrap rounded-r-3xl px-4 py-2"
                href={"#"}
              >
                {" "}
                Add To Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
