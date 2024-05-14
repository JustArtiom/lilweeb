import Message from "@/components/ui/message";
import { Input } from "@/components/ui/input";
import { Footer } from "@/components/footer";

export const Conversation = () => (
  <div className="container h-full flex flex-col overflow-hidden">
    <div className="items-center flex flex-1 flex-col overflow-auto gap-2 py-4">
      <Message>
        I got a wedding ring too, a wedding band. I didnt really go buy no
        necklace. It just rhymed, so I threw it in there. I got a couple of
        these rings. Im married to the money.
      </Message>
      <Message variant="user">User's prompt</Message>
      <Message>
        I got a wedding ring too, a wedding band. I didnt really go buy no
        necklace. It just rhymed, so I threw it in there. I got a couple of
        these rings. Im married to the money.
      </Message>
      <Message variant="user">
        I got a wedding ring too, a wedding band. I didt really go buy no
        necklace. It just rhymed, so I threw it in there. I got a couple of
        these rings. Im married to the money.
      </Message>
      <Message>
        I got a wedding ring too, a wedding band. I didnt really go buy no
        necklace. It just rhymed, so I threw it in there. I got a couple of
        these rings. Im married to the money.
      </Message>
      <Message variant="user">
        I got a wedding ring too, a wedding band. I didt really go buy no
        necklace. It just rhymed, so I threw it in there. I got a couple of
        these rings. Im married to the money.
      </Message>
      <Message>
        I got a wedding ring too, a wedding band. I didnt really go buy no
        necklace. It just rhymed, so I threw it in there. I got a couple of
        these rings. Im married to the money.
      </Message>
      <Message variant="user">
        I got a wedding ring too, a wedding band. I didt really go buy no
        necklace. It just rhymed, so I threw it in there. I got a couple of
        these rings. Im married to the money.
      </Message>
      <Message>
        I got a wedding ring too, a wedding band. I didnt really go buy no
        necklace. It just rhymed, so I threw it in there. I got a couple of
        these rings. Im married to the money.
      </Message>
      <Message variant="user">
        I got a wedding ring too, a wedding band. I didt really go buy no
        necklace. It just rhymed, so I threw it in there. I got a couple of
        these rings. Im married to the money.
      </Message>
      <Message variant="user">
        I got a wedding ring too, a wedding band. I didt really go buy no
        necklace. It just rhymed, so I threw it in there. I got a couple of
        these rings. Im married to the money.
      </Message>
      <Message>
        I got a wedding ring too, a wedding band. I didnt really go buy no
        necklace. It just rhymed, so I threw it in there. I got a couple of
        these rings. Im married to the money.
      </Message>
      <Message variant="user">
        I got a wedding ring too, a wedding band. I didt really go buy no
        necklace. It just rhymed, so I threw it in there. I got a couple of
        these rings. Im married to the money.
      </Message>
      <Message variant="user">
        I got a wedding ring too, a wedding band. I didt really go buy no
        necklace. It just rhymed, so I threw it in there. I got a couple of
        these rings. Im married to the money.
      </Message>
      <Message>
        I got a wedding ring too, a wedding band. I didnt really go buy no
        necklace. It just rhymed, so I threw it in there. I got a couple of
        these rings. Im married to the money.
      </Message>
      <Message variant="user">
        I got a wedding ring too, a wedding band. I didt really go buy no
        necklace. It just rhymed, so I threw it in there. I got a couple of
        these rings. Im married to the money.
      </Message>
      <Message variant="user">
        I got a wedding ring too, a wedding band. I didt really go buy no
        necklace. It just rhymed, so I threw it in there. I got a couple of
        these rings. Im married to the money.
      </Message>
      <Message>
        I got a wedding ring too, a wedding band. I didnt really go buy no
        necklace. It just rhymed, so I threw it in there. I got a couple of
        these rings. Im married to the money.
      </Message>
      <Message variant="user">
        I got a wedding ring too, a wedding band. I didt really go buy no
        necklace. It just rhymed, so I threw it in there. I got a couple of
        these rings. Im married to the money.
      </Message>
    </div>
    <div className=" w-full p-3">
      <Input className="bg-[#1C1C1C] border border-1 text-white font-medium bottom-0 max-w-[800px] w-[90%] mx-auto" />
      <Footer />
    </div>
  </div>
);
