import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'rgba(255, 255, 255, 0.1)',
				input: 'rgba(255, 255, 255, 0.08)',
				ring: '#7C3AED',
				background: '#0B0F19',
				foreground: '#FFFFFF',
				primary: {
					DEFAULT: '#7C3AED',
					foreground: '#FFFFFF',
					glow: '#9333EA',
					hover: '#6D28D9'
				},
				secondary: {
					DEFAULT: '#3B82F6',
					foreground: '#FFFFFF',
					hover: '#2563EB'
				},
				accent: {
					DEFAULT: '#06B6D4',
					foreground: '#0B0F19',
					hover: '#0891B2'
				},
				muted: {
					DEFAULT: '#1E293B',
					foreground: '#94A3B8'
				},
				card: {
					DEFAULT: 'rgba(19, 27, 46, 0.65)',
					foreground: '#FFFFFF'
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Poppins', 'sans-serif'],
				mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
			},
			boxShadow: {
				'glow-purple': '0 0 40px rgba(124, 58, 237, 0.35)',
				'glow-blue': '0 0 40px rgba(59, 130, 246, 0.35)',
				'glow-cyan': '0 0 40px rgba(6, 182, 212, 0.35)',
				'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
			},
			borderRadius: {
				'2xl': '18px',
				'3xl': '24px',
			},
			keyframes: {
				'pulse-slow': {
					'0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
					'50%': { opacity: '0.8', transform: 'scale(1.08)' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-12px)' }
				},
				'border-glow': {
					'0%, 100%': { borderColor: 'rgba(124, 58, 237, 0.4)' },
					'50%': { borderColor: 'rgba(6, 182, 212, 0.6)' }
				}
			},
			animation: {
				'pulse-slow': 'pulse-slow 6s ease-in-out infinite',
				'spin-slow': 'spin-slow 20s linear infinite',
				'float': 'float 4s ease-in-out infinite',
				'border-glow': 'border-glow 4s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
