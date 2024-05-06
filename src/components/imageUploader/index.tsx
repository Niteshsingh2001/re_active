import { CloudArrowUpIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { ChangeEvent, DragEvent, useState } from "react"

function fileToURL(file: File) {
    const fs = new FileReader();
    return new Promise<string>((resolve, reject) => {
        fs.onload = () => {
            resolve(fs.result as string);
        }
        fs.onerror = (error) => {
            reject(error);
        }
        fs.readAsDataURL(file)
    })
}

export default function ImageUploader({ limit }: { limit: number }) {

    // const previewImageContainer = useRef<HTMLDivElement | null>(null)
    const [images, setImages] = useState<string[]>()
    const [isDragOver, setIsDragOver] = useState<boolean>(false)


    async function handleImageUpload(event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault()
        const imgs: FileList | null = event.target.files || null;
        if (imgs) {
            const links: string[] = []

            for (const file of Array.from(imgs)) {
                const link = await fileToURL(file)
                if (limit) {
                    if (links.length < limit) {
                        links.push(link)
                    }
                }
                else {
                    links.push(link)
                }
            }

            images ? setImages([...images, ...links]) : setImages(links)
        }
    }

    async function handleDrop(event: DragEvent<HTMLDivElement>) {
        event.preventDefault()
        const imgs: FileList | null = event.dataTransfer.files || null;
        if (imgs) {
            const links: string[] = []

            for (const file of Array.from(imgs)) {
                if (!file.type.startsWith('image/')) {
                    continue
                }
                const link = await fileToURL(file)

                if (limit) {
                    if (links.length < limit) {
                        links.push(link)
                    }
                }
                else {
                    links.push(link)
                }
            }

            images ? setImages([...images, ...links]) : setImages(links)


        }
        setIsDragOver(false)
    }

    function handleRemoveImage(index: number) {
        if (images) {
            setImages(images.filter((_, i) => i !== index))
        }
    }
    function handleDragOver(event: DragEvent<HTMLDivElement>) {
        event.preventDefault();
        setIsDragOver(true)
    }


    return (



        <div
            className="relative  h-full  w-full  select-none "
            onDrop={handleDrop}
            onDragOver={handleDragOver}

            style={{
                border: isDragOver ? "2px dashed gray" : "none",
            }}


        >
            <div className="h-full w-full">
                <label htmlFor="image_uploader" className="h-full w-full cursor-pointer">
                    <div className="h-full w-full flex items-center justify-center flex-col">
                        <span><CloudArrowUpIcon className="w-8 h-8" /></span>
                        <span className="">
                            Drop your images here
                        </span>
                        {limit && <span className="text-red-500">{images?.length} / {limit}</span>}
                    </div>

                </label>
                <input
                    id="image_uploader"
                    aria-label="upload image"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"

                />
            </div>

            {/* Images Preview */}

            <div className="absolute bottom-0 flex  gap-2 w-full  h-28  p-2  justify-center">
                {
                    images?.map((image, index) => (
                        <div className="relative overflow-hidden rounded-md " key={index}>
                            <div className="absolute top-0 right-0 h-full w-full flex items-start p-1 justify-end hover:bg[#7c7c7c91] ">
                                <button aria-label="remove image" onClick={() => { handleRemoveImage(index) }} className="w-4 h-4">
                                    <XMarkIcon className="w-4 h-4" />
                                </button>
                            </div>
                            <img alt="img_preview" src={image} className="h-full w-full object-cover rounded-md " key={index} />
                        </div>
                    ))
                }
            </div>
        </div>







    )
}





