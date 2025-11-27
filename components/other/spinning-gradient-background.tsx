"use client";

export default function SpinningGradientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* === Blurred Spinning Conic Gradient === */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="blur-[120px]">
          <div className="relative">
            {/* Circular Mask */}
            <div
              className="
                absolute left-1/2 top-1/2 
                h-[100vh] w-[100vw] min-w-[1000px]
                -translate-x-1/2 -translate-y-1/2 scale-[0.7]
                overflow-hidden rounded-full
              "
            >
              {/* Spinning Gradient */}
              <div
                className="
                  absolute left-1/2 top-1/2
                  h-[100vw] w-[100vw]
                  -translate-x-1/2 -translate-y-1/2
                  animate-spin-slow
                "
                style={{
                  background:
                    "conic-gradient(#08f, #f60, #bbffa1, #4c00ff, #ab2666, #09f)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* === Glassy Overlay === */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[25px]" />
    </div>
  );
}
