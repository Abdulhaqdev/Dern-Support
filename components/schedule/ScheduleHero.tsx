import Image from 'next/image';

export function ScheduleHero() {
  return (
    <div className="relative bg-primary/10 py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Professional Ta'mirlash Xizmati
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Qurilmalaringizni professional darajada ta'mirlash uchun vaqt tanlang. 
              Bizning malakali mutaxassislarimiz sizning texnik muammolaringizni hal qilishga tayyor.
            </p>
          </div>
          <div className="relative h-[300px] lg:h-[400px]">
            <Image
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
              alt="Ta'mirlash xizmati"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}