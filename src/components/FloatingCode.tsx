import { useEffect, useState, useCallback } from 'react';

const CODE_SNIPPETS = [
  // Rust - Systems
  {
    code: `async fn process_neural_data<T: BrainStream>(
    input: T
) -> Result<Thought, NeuralError> {
    let processed = input.filter_noise()?;
    Ok(processed.into_thought())
}`,
    lang: 'rust'
  },
  
  // Python - AI
  {
    code: `def train_quantum_net(qubits, epochs):
    circuit = QuantumCircuit(qubits)
    for _ in range(epochs):
        circuit.superposition()
    return circuit.measure()`,
    lang: 'python'
  },
  
  // Go - Blockchain
  {
    code: `func (node *CyberNode) ProcessBlock(
    ctx context.Context,
    block *Block,
) error {
    return node.chain.Verify(block)
}`,
    lang: 'go'
  },
  
  // TypeScript - Frontend
  {
    code: `interface NeuralLink<T> {
    connect(): Promise<BrainSignal>;
    process(data: T): Thought;
}`,
    lang: 'typescript'
  },
  
  // Elixir - Distributed
  {
    code: `defmodule CyberMind do
  def process_stream(data) do
    data
    |> Stream.map(&decrypt/1)
    |> Stream.filter(&valid?/1)
  end
end`,
    lang: 'elixir'
  },
  
  // Scala - Data Processing
  {
    code: `def processNeuralStream[T <: BrainSignal](stream: Stream[T]): Future[Cognition] = {
    stream
      .filterNot(_.isCorrupted)
      .groupBy(_.synapseId)
      .mapAsync(4)(aggregateSignals)
      .runWith(NeuralSink.toMemory)
  }`,
    lang: 'scala'
  },

  // C++ - Hardware Interface
  {
    code: `template<typename NeuralDevice>
class CortexInterface {
    std::vector<Synapse> synapses_;
public:
    Result<void> connect_neural_mesh() {
        auto signal = co_await device_.initialize();
        for (auto& synapse : synapses_) {
            co_await synapse.calibrate(signal);
        }
        return Success();
    }
};`,
    lang: 'cpp'
  },

  // Haskell - Neural Processing
  {
    code: `data NeuralState = NeuralState {
    frequency :: Frequency,
    amplitude :: Amplitude,
    phase :: Phase
}

processSignal :: NeuralState -> Either Error Thought
processSignal state = do
    validated <- validateFrequency state
    amplified <- amplifySignal validated
    pure $ synthesizeThought amplified`,
    lang: 'haskell'
  },

  // Ruby - Neural Network
  {
    code: `class SynapticNetwork
  def initialize(cortex_map)
    @neurons = cortex_map.map do |region, count|
      Array.new(count) { Neuron.new(region) }
    end
  end

  def propagate_signal(impulse)
    @neurons.each_slice(8).map do |cluster|
      cluster.parallel.map(&:fire)
    end.flatten.sum
  end
end`,
    lang: 'ruby'
  },

  // Rust - Neural Protocol
  {
    code: `pub struct NeuralProtocol<T: BrainwaveEncoder> {
    encoder: T,
    frequency: Hertz,
    amplitude: Voltage,
}

impl<T: BrainwaveEncoder> NeuralProtocol<T> {
    pub async fn encode_thought(&self, thought: Thought) -> Result<Signal> {
        let encoded = self.encoder.prepare(thought)?;
        encoded.modulate(self.frequency, self.amplitude)
    }
}`,
    lang: 'rust'
  }
];

interface CodeSnippetProps {
  snippet: typeof CODE_SNIPPETS[0];
  position: { x: number; y: number };
  isDark: boolean;
  onComplete: () => void;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ 
  snippet, 
  position, 
  isDark,
  onComplete 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const getColor = () => {
    const colors: Record<string, { color: string; shadow: string }> = isDark ? {
      rust: { color: '#FF4D4D', shadow: '#FF000080' },
      python: { color: '#4DFFFF', shadow: '#00FFFF80' },
      go: { color: '#FF00FF', shadow: '#FF00FF80' },
      typescript: { color: '#00FF95', shadow: '#00FF9580' },
      elixir: { color: '#FFB300', shadow: '#FFB30080' }
    } : {
      rust: { color: '#8B0000', shadow: '#8B000080' },
      python: { color: '#006666', shadow: '#00666680' },
      go: { color: '#800080', shadow: '#80008080' },
      typescript: { color: '#006B3C', shadow: '#006B3C80' },
      elixir: { color: '#805900', shadow: '#80590080' }
    };
    
    return colors[snippet.lang] || { color: '#666666', shadow: '#66666680' };
  };

  useEffect(() => {
    if (currentIndex < snippet.code.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + snippet.code[currentIndex]);
        setCurrentIndex(c => c + 1);
      }, 40 + Math.random() * 40);

      return () => clearTimeout(timeout);
    } else {
      onComplete();
    }
  }, [currentIndex, snippet.code, onComplete]);

  const color = getColor();

  return (
    <div 
      className="absolute font-mono whitespace-pre-wrap break-all"
      style={{ 
        left: `${position.x}%`, 
        top: `${position.y}%`,
        color: color.color,
        textShadow: `0 0 10px ${color.shadow}`,
        maxWidth: '300px',
        opacity: isDark ? 0.4 : 0.9,
      }}
    >
      <pre className="text-sm leading-relaxed">{displayText}</pre>
    </div>
  );
};

interface FloatingCodeProps {
  isDark: boolean;
}

const FloatingCode: React.FC<FloatingCodeProps> = ({ isDark }) => {
  const [snippets, setSnippets] = useState<Array<{
    id: number;
    snippet: typeof CODE_SNIPPETS[0];
    position: { x: number; y: number };
    opacity: number;
    scale: number;
  }>>([]);

  const getColor = (item: { snippet: typeof CODE_SNIPPETS[0] }) => {
    const colors: Record<string, { color: string; shadow: string }> = isDark ? {
      rust: { color: '#FF4D4D', shadow: '#FF000080' },
      python: { color: '#4DFFFF', shadow: '#00FFFF80' },
      go: { color: '#FF00FF', shadow: '#FF00FF80' },
      typescript: { color: '#00FF95', shadow: '#00FF9580' },
      elixir: { color: '#FFB300', shadow: '#FFB30080' }
    } : {
      rust: { color: '#8B0000', shadow: '#8B000080' },
      python: { color: '#006666', shadow: '#00666680' },
      go: { color: '#800080', shadow: '#80008080' },
      typescript: { color: '#006B3C', shadow: '#006B3C80' },
      elixir: { color: '#805900', shadow: '#80590080' }
    };
    
    return colors[item.snippet.lang] || { color: '#666666', shadow: '#66666680' };
  };

  useEffect(() => {
    const addNewSnippet = () => {
      if (snippets.length >= 5) return;

      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const snippetIndex = Math.floor(Math.random() * CODE_SNIPPETS.length);
      const id = Date.now();

      setSnippets(prev => [...prev, {
        id,
        snippet: CODE_SNIPPETS[snippetIndex],
        position: { x, y },
        opacity: 0.4,
        scale: 0.8 + Math.random() * 0.4
      }]);
    };

    if (snippets.length === 0) {
      for (let i = 0; i < 3; i++) {
        addNewSnippet();
      }
    }

    const interval = setInterval(addNewSnippet, 4000);
    return () => clearInterval(interval);
  }, [snippets.length]);

  const removeSnippet = useCallback((id: number) => {
    setSnippets(prev => prev.filter(s => s.id !== id));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {snippets.map((item) => (
        <CodeSnippet
          key={item.id}
          snippet={item.snippet}
          position={item.position}
          isDark={isDark}
          onComplete={() => setTimeout(() => removeSnippet(item.id), 5000)}
        />
      ))}
    </div>
  );
};

export default FloatingCode;