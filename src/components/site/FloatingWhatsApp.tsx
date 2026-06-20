export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918927840261?text=Hi%20Pixorra!%20I%20want%20a%20free%20demo%20website."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 md:bottom-6 right-5 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-pixel-green animate-ping opacity-30" />
      <span className="relative flex items-center gap-3 h-14 pl-4 pr-5 rounded-full bg-pixel-green text-white font-semibold shadow-card-lg hover:scale-105 transition-transform">
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.032 21.965c-1.892 0-3.728-.496-5.316-1.428l-5.326 1.74 1.74-5.326A9.92 9.92 0 0 1 2.032 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm0-18.965c-4.963 0-9 4.037-9 9 0 1.885.58 3.636 1.57 5.066l-1.04 3.178 3.24-1.058A8.957 8.957 0 0 0 12.032 21c4.963 0 9-4.037 9-9s-4.037-9-9-9zm4.685 11.674c-.26-.13-1.54-.76-1.778-.846-.238-.087-.412-.13-.585.13-.173.26-.672.846-.823 1.02-.151.173-.302.195-.562.065-.26-.13-1.098-.405-2.092-1.292-.773-.69-1.296-1.542-1.448-1.803-.151-.26-.016-.401.114-.53.116-.116.26-.302.39-.455.13-.151.173-.26.26-.433.087-.173.043-.325-.022-.455-.065-.13-.585-1.41-.802-1.93-.211-.507-.425-.423-.585-.433-.151-.01-.325-.012-.498-.012-.173 0-.455.065-.694.325-.239.26-.913.893-.913 2.178 0 1.285.935 2.527 1.066 2.702.13.173 1.842 2.812 4.462 3.944.623.268 1.11.43 1.49.55.628.2 1.2.172 1.652.104.504-.076 1.54-.63 1.757-1.237.217-.607.217-1.127.152-1.237-.065-.108-.238-.173-.498-.303z"/>
        </svg>
        <span className="hidden md:inline">Free Demo on WhatsApp</span>
      </span>
    </a>
  );
}
