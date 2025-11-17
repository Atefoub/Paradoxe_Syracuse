document.addEventListener('DOMContentLoaded', () => {
    const numberInput = document.getElementById('numberInput');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultsContainer = document.getElementById('resultsContainer');
    const stepsCount = document.getElementById('stepsCount');
    const maxAltitude = document.getElementById('maxAltitude');
    const flightTime = document.getElementById('flightTime');
    const sequenceDisplay = document.getElementById('sequenceDisplay');
    const copyBtn = document.getElementById('copyBtn');
    const chartCanvas = document.getElementById('chartCanvas');
    const ctx = chartCanvas.getContext('2d');

    // Event listeners
    calculateBtn.addEventListener('click', handleCalculate);
    numberInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleCalculate();
    });
    copyBtn.addEventListener('click', copySequence);

    // Calculer automatiquement au chargement
    handleCalculate();

    function handleCalculate() {
        const n = parseInt(numberInput.value);
        
        if (!n || n < 1) {
            showNotification('Veuillez entrer un nombre entier positif', 'error');
            return;
        }

        if (n > 10000000) {
            showNotification('Nombre trop grand (maximum: 10 000 000)', 'error');
            return;
        }

        const sequence = generateSyracuseSequence(n);
        displayResults(sequence);
        drawChart(sequence);
    }

    function generateSyracuseSequence(n) {
        const sequence = [n];
        let current = n;
        let iterations = 0;
        const maxIterations = 10000;
        
        while (current !== 1 && iterations < maxIterations) {
            if (current % 2 === 0) {
                current = current / 2;
            } else {
                current = current * 3 + 1;
            }
            sequence.push(current);
            iterations++;
        }
        
        return sequence;
    }

    function displayResults(sequence) {
        resultsContainer.classList.remove('hidden');
        
        const steps = sequence.length - 1;
        const maxValue = Math.max(...sequence);
        const flight = steps;
        
        animateValue(stepsCount, 0, steps, 800);
        animateValue(maxAltitude, 0, maxValue, 800);
        animateValue(flightTime, 0, flight, 800);
        
        displaySequence(sequence);
        
        setTimeout(() => {
            resultsContainer.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'nearest' 
            });
        }, 100);
    }

    function displaySequence(sequence) {
        sequenceDisplay.innerHTML = '';
        
        sequence.forEach((num, index) => {
            const span = document.createElement('span');
            span.textContent = num.toLocaleString('fr-FR');
            span.style.animationDelay = `${index * 0.01}s`;
            span.classList.add('sequence-item');
            sequenceDisplay.appendChild(span);
        });
    }

    function animateValue(element, start, end, duration) {
        if (start === end) {
            element.textContent = end.toLocaleString('fr-FR');
            return;
        }

        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                current = end;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current).toLocaleString('fr-FR');
        }, 16);
    }

    function drawChart(sequence) {
        const dpr = window.devicePixelRatio || 1;
        const rect = chartCanvas.getBoundingClientRect();
        
        chartCanvas.width = rect.width * dpr;
        chartCanvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);
        
        const width = rect.width;
        const height = rect.height;
        const padding = 40;
        const graphWidth = width - padding * 2;
        const graphHeight = height - padding * 2;
        
        const maxValue = Math.max(...sequence);
        const minValue = Math.min(...sequence);
        const xStep = graphWidth / (sequence.length - 1);
        const yScale = graphHeight / (maxValue - minValue || 1);
        
        ctx.clearRect(0, 0, width, height);
        
        // Grille de fond
        drawGrid(ctx, padding, graphWidth, graphHeight, maxValue);
        
        // Gradient sous la courbe
        drawGradientArea(ctx, sequence, padding, graphHeight, xStep, yScale, minValue);
        
        // Ligne principale
        drawLine(ctx, sequence, padding, graphHeight, xStep, yScale, minValue);
        
        // Points
        drawPoints(ctx, sequence, padding, graphHeight, xStep, yScale, minValue);
        
        // Axes et labels
        drawAxes(ctx, padding, width, height, graphWidth, graphHeight, sequence, maxValue);
    }

    function drawGrid(ctx, padding, graphWidth, graphHeight, maxValue) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.lineWidth = 1;
        
        for (let i = 0; i <= 5; i++) {
            const y = padding + (graphHeight / 5) * i;
            ctx.beginPath();
            ctx.moveTo(padding, y);
            ctx.lineTo(padding + graphWidth, y);
            ctx.stroke();
        }
        
        for (let i = 0; i <= 10; i++) {
            const x = padding + (graphWidth / 10) * i;
            ctx.beginPath();
            ctx.moveTo(x, padding);
            ctx.lineTo(x, padding + graphHeight);
            ctx.stroke();
        }
    }

    function drawGradientArea(ctx, sequence, padding, graphHeight, xStep, yScale, minValue) {
        const gradient = ctx.createLinearGradient(0, padding, 0, padding + graphHeight);
        gradient.addColorStop(0, 'rgba(102, 126, 234, 0.3)');
        gradient.addColorStop(1, 'rgba(118, 75, 162, 0.05)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(padding, padding + graphHeight);
        
        sequence.forEach((value, index) => {
            const x = padding + index * xStep;
            const y = padding + graphHeight - ((value - minValue) * yScale);
            ctx.lineTo(x, y);
        });
        
        ctx.lineTo(padding + (sequence.length - 1) * xStep, padding + graphHeight);
        ctx.closePath();
        ctx.fill();
    }

    function drawLine(ctx, sequence, padding, graphHeight, xStep, yScale, minValue) {
        const gradient = ctx.createLinearGradient(0, 0, chartCanvas.width, 0);
        gradient.addColorStop(0, '#667eea');
        gradient.addColorStop(0.5, '#764ba2');
        gradient.addColorStop(1, '#f093fb');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.shadowColor = 'rgba(102, 126, 234, 0.5)';
        ctx.shadowBlur = 10;
        
        ctx.beginPath();
        sequence.forEach((value, index) => {
            const x = padding + index * xStep;
            const y = padding + graphHeight - ((value - minValue) * yScale);
            
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        ctx.stroke();
        
        ctx.shadowBlur = 0;
    }

    function drawPoints(ctx, sequence, padding, graphHeight, xStep, yScale, minValue) {
        sequence.forEach((value, index) => {
            const x = padding + index * xStep;
            const y = padding + graphHeight - ((value - minValue) * yScale);
            
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, 4);
            gradient.addColorStop(0, '#ffffff');
            gradient.addColorStop(1, '#667eea');
            ctx.fillStyle = gradient;
            ctx.fill();
            
            ctx.strokeStyle = 'rgba(10, 14, 39, 0.8)';
            ctx.lineWidth = 2;
            ctx.stroke();
        });
    }

    function drawAxes(ctx, padding, width, height, graphWidth, graphHeight, sequence, maxValue) {
        ctx.fillStyle = '#a0aec0';
        ctx.font = '12px Inter, sans-serif';
        ctx.textAlign = 'center';
        
        ctx.fillText('0', padding, height - padding + 20);
        ctx.fillText(sequence.length - 1, padding + graphWidth, height - padding + 20);
        
        ctx.textAlign = 'right';
        ctx.fillText(maxValue.toLocaleString('fr-FR'), padding - 10, padding + 5);
        ctx.fillText('0', padding - 10, padding + graphHeight + 5);
    }

    function copySequence() {
        const sequence = Array.from(sequenceDisplay.children)
            .map(span => span.textContent)
            .join(', ');
        
        navigator.clipboard.writeText(sequence).then(() => {
            showNotification('Séquence copiée !', 'success');
        }).catch(() => {
            showNotification('Erreur lors de la copie', 'error');
        });
    }

    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Redimensionnement du canvas
    window.addEventListener('resize', () => {
        const sequence = generateSyracuseSequence(parseInt(numberInput.value) || 27);
        if (!resultsContainer.classList.contains('hidden')) {
            drawChart(sequence);
        }
    });
});