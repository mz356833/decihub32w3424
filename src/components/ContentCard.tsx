import React from 'react';
import { Volume2 } from 'lucide-react';

const ContentCard = () => {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Megaphone and speech bubble */}
      <div className="absolute -left-4 top-20 transform -rotate-12 z-20 hidden md:block">
        <div className="relative">
          <Volume2 className="w-16 h-16 text-gray-400 bg-white p-2 rounded-full shadow-lg" />
        </div>
      </div>
      
      {/* Speech bubble with text */}
      <div className="relative md:ml-16 mb-8">
        <div className="bg-yellow-300 rounded-3xl p-4 transform rotate-2 shadow-lg">
          <div className="absolute -left-4 top-1/2 w-8 h-8 bg-yellow-300 rounded-full hidden md:block"></div>
          <h2 className="text-pink-600 text-5xl md:text-6xl font-bold mb-2 text-center">
            哪些笔记爆了?
          </h2>
        </div>
      </div>
      
      {/* Main content with person */}
      <div className="relative">
        {/* Person with yellow background */}
        <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="absolute inset-0 bg-yellow-300 opacity-30"></div>
          
          <div className="relative p-6 flex flex-col md:flex-row">
            {/* Person image on left */}
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 bg-yellow-300 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Woman shouting" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Text content on right */}
            <div className="md:w-1/2 mt-6 md:mt-0 flex flex-col justify-center">
              <div className="bg-pink-600 text-white font-bold text-4xl md:text-5xl py-3 px-6 rounded-2xl transform -rotate-2 mb-6 text-center">
                小红书上周
              </div>
              <div className="bg-pink-600 text-white font-bold text-3xl md:text-4xl py-3 px-6 rounded-2xl transform rotate-1 text-center">
                最火的10个爆款封面
              </div>
              <div className="absolute bottom-4 right-6 bg-white rounded-full px-4 py-2 shadow-md text-pink-600 font-bold transform rotate-3">
                每周更新!
              </div>
              <div className="absolute -right-4 bottom-20 bg-pink-400 rounded-full px-4 py-2 shadow-md text-white font-bold transform -rotate-12">
                @精选投稿
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
