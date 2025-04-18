
import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import FloatingHearts from '../components/FloatingHearts';

const LoveMessage = () => {
  const [isFullMessageVisible, setIsFullMessageVisible] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  const toggleFullMessage = () => {
    setIsFullMessageVisible(!isFullMessageVisible);
    setShowHearts(true);
    setTimeout(() => setShowHearts(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-3xl p-8 md:p-12 text-center transform transition-all duration-500 hover:scale-105 relative">
        <FloatingHearts active={showHearts} />
        <Heart className="mx-auto text-red-500 mb-6" size={64} />
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Minha Amada Ana Vitória
        </h1>
        
        <div className="mb-8 overflow-hidden rounded-2xl shadow-lg">
          <AspectRatio ratio={16/9}>
            <img 
              src="/lovable-uploads/f11f3033-9507-4deb-986e-c2f0a72d80f5.png"
              alt="Momentos especiais juntos"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </AspectRatio>
        </div>

        <div className="text-lg text-gray-700 leading-relaxed mb-6">
          {isFullMessageVisible ? (
            <>
              <p className="mb-4">
                Minha namorada, Você é o mais precioso presente que a vida me deu. Cada dia ao seu lado é um milagre de amor, de conexão, de cumplicidade.
              </p>
              
              <p className="mb-4">
                Ana Vitória, você ilumina meus dias com seu sorriso, aquece meu coração com seu amor. Sua força me inspira, sua doçura me acalma, sua inteligência me fascina. Você não é apenas alguém que eu amo, mas alguém que me faz querer ser uma versão melhor de mim mesmo todos os dias.
              </p>
              
              <p className="mb-4">
                Prometo estar ao seu lado em cada momento — nas alegrias que nos fazem rir até não poder mais, e nas dificuldades que nos farão crescer juntos. Meu amor por você não é apenas um sentimento, é um compromisso, uma escolha que faço todos os dias.
              </p>
              
              <p>
                Sou infinitamente grato por ter você. Você é meu lar, minha paz. Te amo além das palavras, além do tempo.
              </p>
            </>
          ) : (
            <p>
              Te amo pra sempre minha BBzinha Ana Vitória.
            </p>
          )}
        </div>
        
        <button 
          onClick={toggleFullMessage}
          className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-colors"
        >
          {isFullMessageVisible ? 'Ocultar Mensagem' : 'Ler Mensagem Completa'}
        </button>
      </div>
    </div>
  );
};

export default LoveMessage;

