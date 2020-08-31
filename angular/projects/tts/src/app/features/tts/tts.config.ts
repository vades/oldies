export const ttsConfig = {
    action: null,
    utterance: { 
        text: "So my team who built this <div>API has realized that the underlying issue </div> here is somewhere in their code caching results so that's why my APIs aren't returning the results expected.",
        voice: 'Google US English',
        lang: 'en-US',
        rate: 1,
        volume: 1,
        pitch: 1,
    },
    rates: [
        { level: 1, label: 'Normal' },
        { level: 0.1, label: 'Slowest' },
        { level: 0.5, label: 'Slower' },
        { level: 0.8, label: 'Slow' },
        { level: 1.2, label: 'Fast' },
        { level: 1.6, label: 'Faster' },
        { level: 2, label: 'Fastest' },
        
    ],
    pitches: [
        { level: 1, label: 'Normal' },
        { level: 0, label: 'Lowest' },
        { level: 0.5, label: 'Lower' },
        { level: 0.5, label: 'Low' },
        { level: 1.2, label: 'High' },
        { level: 1.6, label: 'Higher' },
        { level: 2, label: 'Highest' },
        
    ],
};
