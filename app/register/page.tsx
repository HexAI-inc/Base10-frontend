'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const router = useRouter()
  
  useEffect(() => {
    router.replace('/login?mode=signup')
  }, [router])

  return null
}

                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  className="w-full h-16 pl-16 pr-16 bg-slate-50 dark:bg-slate-900 border-2 border-transparent focus:border-emerald-500/50 rounded-2xl outline-none text-slate-900 dark:text-slate-100 font-bold transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="md:col-span-2 bg-red-500/10 border-2 border-red-500/20 rounded-2xl p-4 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <p className="text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-widest">{error}</p>
              </div>
            )}

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full h-16 bg-emerald-600 text-white rounded-2xl font-outfit font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-xl shadow-emerald-600/20 hover:scale-105 transition-all disabled:opacity-50"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <CheckCircle2 className="w-5 h-5" />}
                Create Account
              </button>
            </div>
          </form>

          <div className="mt-10 text-center">
            <p className="text-sm text-slate-500 font-medium">
              Already have an account?{' '}
              <Link href="/login" className="text-emerald-600 font-black uppercase tracking-widest text-xs hover:text-emerald-500 transition-colors ml-2">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
